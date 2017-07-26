const EventEmitter = require('../lib/index').EventEmitter,
    sinon = require('sinon');


describe('EventEmitter', () => {

    it('should trigger', () => {
        const e = new EventEmitter(),
            cb = sinon.spy();

        e.on('event', cb);

        e.listeners.size.should.equal(1);
        e.listeners.get('event').length.should.equal(1);

        e.trigger('event', 251);

        cb.called.should.be.true();
        cb.calledWith(251).should.be.true();
    });


});